import { MotionPage } from '@/components/page-transition'
import { ProfileTabs } from '@/components/profile-tabs'

export const metadata = { title: 'Profile' }

export default function ProfilePage() {
  return (
    <MotionPage>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
        <ProfileTabs />
      </section>
    </MotionPage>
  )
}

