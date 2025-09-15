import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Click Me" size="large" shape="rounded-full" />
      <Card />
      <Button title="Submit" size="medium" shape="rounded-md" />
      <Card />
      <Button title="Learn More" size="small" shape="rounded-sm" />
    </div>
  )
}
export default Landing