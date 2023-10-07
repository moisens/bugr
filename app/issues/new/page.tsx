"use client";

import { TextField, TextFieldRoot, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className="max-w-lg space-y-3">
      <TextFieldRoot>
        <TextField.Input placeholder="Title" size="3" />
      </TextFieldRoot>
      <SimpleMDE placeholder="Description…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
