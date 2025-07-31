"use client"
import { useState } from "react"
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [justifyContent, setJustifyContent] = useState("flex-start")
  const [alignItems, setAlignItems] = useState("flex-start")
  const [flexDirection, setFlexDirection] = useState<"row" | "row-reverse" | "column" | "column-reverse">("row")
  const [gap, setGap] = useState(0)
  const [padding, setPadding] = useState(0)
  const [margin, setMargin] = useState(0)
  const [buttons, setButtons] = useState(4)
  return (
    <div>
      <div className="flex gap-0 flex-row justify-end mb-7">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Justify Content</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setJustifyContent("flex-start")}>flex-start</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setJustifyContent("center")}>center</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setJustifyContent("flex-end")}>flex-end</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setJustifyContent("space-between")}>space-between</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setJustifyContent("space-around")}>space-around</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setJustifyContent("space-evenly")}>space-evenly</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Align Items</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setAlignItems("flex-start")}>start</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAlignItems("flex-end")}>end</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAlignItems("center")}>center</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAlignItems("stretch")}>stretch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Flex Direction</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setFlexDirection("row")}>row</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFlexDirection("row-reverse")}>row-reverse</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFlexDirection("column")}>column</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFlexDirection("column-reverse")}>column-reverse</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Gap</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setGap(0)}>0</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setGap(10)}>10</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setGap(20)}>20</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setGap(30)}>30</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setGap(40)}>40</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Padding</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setPadding(0)}>0</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPadding(10)}>10</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPadding(20)}>20</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPadding(30)}>30</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPadding(40)}>40</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Margin</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setMargin(0)}>0</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMargin(10)}>10</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMargin(20)}>20</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMargin(30)}>30</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMargin(40)}>40</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <DropdownMenu>
          <DropdownMenuTrigger className="text-white bg-black w-50 rounded-md">Num buttons</DropdownMenuTrigger>
          <DropdownMenuContent className="text-white bg-black">
            <DropdownMenuItem onClick={() => setButtons(1)}>1</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setButtons(5)}>5</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setButtons(10)}>20</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="flex gap-2 border-black-500 border-2 min-h-32" style={{ justifyContent, alignItems, flexDirection, gap, padding, margin }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center flex-col items-center mt-4 border-gray-300 border-2 w-fit rounded-md p-4">
          <p>Justify Content: {justifyContent}</p>
          <p>Align Items: {alignItems}</p>
          <p>Flex Direction: {flexDirection}</p>
          <p>Gap: {gap}</p>
          <p>Padding: {padding}</p>
          <p>Margin: {margin}</p>
        </div>
      </div>
    </div>
  );
}
