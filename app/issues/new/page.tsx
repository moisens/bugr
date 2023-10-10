"use client";

import { Button, Callout, TextField, TextFieldRoot } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import ErrorsMessages from "@/app/components/ErrorsMessages";
import Spinner from "@/app/components/Spinner";
import { createIssuesSchema } from "../../validationSchema";

type IssueFormType = z.infer<typeof createIssuesSchema>;

const NewIssuePage = () => {
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueFormType>({
    resolver: zodResolver(createIssuesSchema),
  });
  const router = useRouter();

  const handleOnSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitError("Unable to submit the issue. All fields must be filled!");
    }
  });

  return (
    <div className="max-w-lg">
      {submitError ? (
        <Callout.Root color="tomato" className="mb-5">
          <Callout.Text>{submitError}</Callout.Text>
        </Callout.Root>
      ) : null}
      <form className="space-y-3" onSubmit={handleOnSubmit}>
        <TextFieldRoot>
          <TextField.Input
            placeholder="Title"
            size="3"
            {...register("title")}
          />
        </TextFieldRoot>
        <ErrorsMessages>{errors.title?.message}</ErrorsMessages>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorsMessages>{errors.description?.message}</ErrorsMessages>
        <Button disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Submit New Issue"}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
