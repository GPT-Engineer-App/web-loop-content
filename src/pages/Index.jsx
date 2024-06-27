import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { title: "Column 1", content: "Content for column 1" },
  { title: "Column 2", content: "Content for column 2" },
  { title: "Column 3", content: "Content for column 3" },
  { title: "Column 4", content: "Content for column 4" },
  { title: "Column 5", content: "Content for column 5" },
  { title: "Column 6", content: "Content for column 6" },
  { title: "Column 7", content: "Content for column 7" },
  { title: "Column 8", content: "Content for column 8" },
];

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {data.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;