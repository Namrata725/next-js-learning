import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>hello world</p>
      <Button>Click me</Button>
      <Button variant="destructive">Btn-1</Button>
      <Button variant="link">Btn-1</Button>
      <Button variant="outline" size="lg">
        Btn-1
      </Button>
    </div>
  );
}
