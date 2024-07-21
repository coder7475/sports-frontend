import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const MyCard = () => {
  return (
    <Card>
      <CardHeader>
        <img src="/src/assets/fdgdfg.jpeg" alt="iam" className="rounded-lg" />
      </CardHeader>
      <CardContent>
        <CardTitle>Good 1</CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          quod repellendus eaque magni sapiente. Ab non cupiditate dignissimos
          ad, eos quod suscipit enim rerum architecto, iusto nulla voluptate
          doloremque nostrum?
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default MyCard;
