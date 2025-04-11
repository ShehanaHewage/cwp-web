'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { User, Lock } from 'lucide-react'
import GoogleIcon from '@/components/icons/GoogleIcon'
import { useSetAuth } from '@/stores/authStore'
import FacebookIcon from '@/components/icons/FacebookIcon'
const formSchema = z.object({
  username: z.string().min(1, {
    message: 'Username must be at least 1 characters.',
  }),
  password: z.string().min(1, {
    message: 'Password must be at least 1 characters.',
  }),
})

export default function LoginForm() {
  const router = useRouter()
  const setAuth = useSetAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async (formValues: z.infer<typeof formSchema>) => {
    // TODO: remove this
    if (formValues.username === 'test@gmail.com' && formValues.password === 'test') {
      setAuth('jwt-token', {
        id: '0001',
        username: 'test@gmail.com',
        firstName: 'Test',
        lastName: 'User',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    const response = await fetch('http://localhost:8080/api/user/login', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })

    if (response.status !== 200) {
      form.setError('username', {
        type: 'manual',
        message: 'Invalid username or password',
      })
      form.setError('password', {
        type: 'manual',
        message: 'Invalid username or password',
      })
      return
    }

    const data = await response.json()

    // save token to local storage
    localStorage.setItem('token', data.token)
    console.log(data)

    router.push('/')
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Username</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      {...field}
                      className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      {...field}
                      type="password"
                      className="pl-10 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center text-sm mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 block text-gray-600">
                Remember me
              </label>
            </div>
            <Button variant="link" className="text-blue-600 hover:underline" disabled>
              Forgot password?
            </Button>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors mt-4">
            Sign In
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="bg-white hover:bg-gray-50" disabled>
          <GoogleIcon />
          Google
        </Button>
        <Button variant="outline" className="bg-white hover:bg-gray-50" disabled>
          <FacebookIcon />
          Facebook
        </Button>
      </div>
    </div>
  )
}
