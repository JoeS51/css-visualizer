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
  return (
    <div>
      <div className="flex gap-2 flex-col">
        <DropdownMenu>
        <DropdownMenuTrigger>Justify Content</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setJustifyContent("flex-start")}>flex-start</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setJustifyContent("center")}>center</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setJustifyContent("flex-end")}>flex-end</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setJustifyContent("space-between")}>space-between</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setJustifyContent("space-around")}>space-around</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setJustifyContent("space-evenly")}>space-evenly</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Align Items</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setAlignItems("flex-start")}>start</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAlignItems("flex-end")}>end</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAlignItems("center")}>center</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setAlignItems("stretch")}>stretch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>Flex Direction</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFlexDirection("row")}>row</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFlexDirection("row-reverse")}>row-reverse</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFlexDirection("column")}>column</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFlexDirection("column-reverse")}>column-reverse</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-2 border-black-500 border-2 min-h-32" style={{ justifyContent, alignItems, flexDirection }}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </div>
    </div>
  );
}
