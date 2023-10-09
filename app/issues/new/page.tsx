"use client";

import "easymde/dist/easymde.min.css";
import { TextField, TextFieldRoot, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type IssueFormType = {
  title: string;
  description: string;
};

const NewIssuePage = () => {
  const [submitError, setSubmitError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueFormType>();
  const router = useRouter();

  return (
    <div className="max-w-lg">
      {submitError ? (
        <Callout.Root color="tomato" className="mb-5">
          <Callout.Text>{submitError}</Callout.Text>
        </Callout.Root>
      ) : null}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setSubmitError("Unable to submit the issue. All fields must be filled!");
          }
        })}
      >
        <TextFieldRoot>
          <TextField.Input
            placeholder="Title"
            size="3"
            {...register("title")}
          />
        </TextFieldRoot>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
