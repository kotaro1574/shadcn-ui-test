"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [selectedFruit, setSelectedFruit] = useState("");
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">
          {selectedFruit ? selectedFruit : "select a fruit"}
        </h1>
        <Select value={selectedFruit} onValueChange={setSelectedFruit}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="fruits" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple🍎">Apple🍎</SelectItem>
            <SelectItem value="banana🍌">Banana🍌</SelectItem>
            <SelectItem value="orange🍊">Orange🍊</SelectItem>
            <SelectItem value="pineapple🍍">Pineapple🍍</SelectItem>
            <SelectItem value="strawberry🍓">Strawberry🍓</SelectItem>
          </SelectContent>
        </Select>

        <Button
          onClick={() => {
            setSelectedFruit("");
            console.log("fruits deleted");
          }}
          variant="destructive"
          className="w-full max-w-[180px]"
        >
          delete
        </Button>
      </div>
    </div>
  );
}
