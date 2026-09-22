import Seo from '../../utils/Seo'
import Hero from '../../components/home/Hero'
import QuickCourseNav from '../../components/home/QuickCourseNav'
import WhyCloudByte from '../../components/home/WhyCloudByte'
import WhoIsThisFor from '../../components/home/WhoIsThisFor'
import TrainingExperience from '../../components/home/TrainingExperience'
import SalesforceFeature from '../../components/home/SalesforceFeature'
import RealDevelopment from '../../components/home/RealDevelopment'
import CodeShowcase from '../../components/home/CodeShowcase'
import TrainersPreview from '../../components/home/TrainersPreview'
import ProjectsPreview from '../../components/home/ProjectsPreview'
import TestimonialsPreview from '../../components/home/TestimonialsPreview'
import CTASection from '../../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Seo
        title="Practical Salesforce, MERN, UI/UX & Python Training"
        description="Learn Salesforce, MERN Stack, UI/UX and Python from industry professionals through practical, project-based training with flexible timings and career support."
        path="/"
      />
      <Hero />
      <QuickCourseNav />
      <WhyCloudByte />
      <WhoIsThisFor />
      <TrainingExperience />
      <SalesforceFeature />
      <RealDevelopment />
      <CodeShowcase />
      <TrainersPreview />
      <ProjectsPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  )
}
