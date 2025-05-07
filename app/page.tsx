"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Home() {
  const [selectedFruit, setSelectedFruit] = useState("");
  const [deletedText, setDeletedText] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">
          {selectedFruit ? selectedFruit : "select a fruit"}
        </h1>
        <Select
          value={selectedFruit}
          onValueChange={(value) => {
            setSelectedFruit(value);
            setDeletedText("");
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="fruits" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple🍎">Apple🍎</SelectItem>
              <SelectItem value="banana🍌">Banana🍌</SelectItem>
              <SelectItem value="orange🍊">Orange🍊</SelectItem>
              <SelectItem value="pineapple🍍">Pineapple🍍</SelectItem>
              <SelectItem value="strawberry🍓">Strawberry🍓</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          onClick={() => {
            setSelectedFruit("");
            setDeletedText("fruits deleted");
          }}
          variant="destructive"
          className="w-full max-w-[200px] mt-16"
        >
          delete
        </Button>
        {deletedText && <p className="text-sm text-red-500">{deletedText}</p>}
      </div>
    </div>
  );
}
