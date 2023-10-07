"use client";

import { TextField, TextFieldRoot, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-lg space-y-3">
      <TextFieldRoot>
        <TextField.Input placeholder="Title" size="3" />
      </TextFieldRoot>
      <TextArea placeholder="Description…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
