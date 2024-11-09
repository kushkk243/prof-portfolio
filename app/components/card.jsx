import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";

export default function App(props) {
  return (
    <Card
      isFooterBlurred
      radius="full"
      className="border-none shadow-lg shadow-sky-200/20"
    >
      <Image
        alt="Woman listing to music"
        className=" object-cover"
        src={props.link}
        
      />
      <CardFooter className="justify-between before:bg-white/10 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-sm shadow-white/40 ml-1 z-10 border-1 border-black/10">
        <p className="text-l text-white/80 font-bold">{props.input}</p>
        <Link href={props.href} target="_blank">
        <Button className="text-tiny text-white bg-transparent border-1 border-black/10 shadow-sm shadow-white/30" variant="flat" color="default" radius="lg" size="md">
          Learn More
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}