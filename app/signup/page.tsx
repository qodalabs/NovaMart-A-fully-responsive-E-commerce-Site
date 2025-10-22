import { AuthForm } from '@/components/forms/auth-form'
import { MotionPage } from '@/components/page-transition'

export const metadata = { title: 'Sign Up' }

export default function SignupPage() {
  return (
    <MotionPage>
      <div className="container mx-auto px-4 py-16 max-w-md">
        <AuthForm mode="signup" />
      </div>
    </MotionPage>
  )
}

