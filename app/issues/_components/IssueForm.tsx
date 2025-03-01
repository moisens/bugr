"use client";

import { Button, Callout, TextField, TextFieldRoot } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import ErrorsMessages from "@/app/components/ErrorsMessages";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import { createIssuesSchema } from "../../validationSchema";

import SimpleMDE from "react-simplemde-editor";

type IssueFormDataType = z.infer<typeof createIssuesSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormDataType>({
    resolver: zodResolver(createIssuesSchema),
  });
  const router = useRouter();

  const handleOnSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
      else await axios.post("/api/issues", data);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setIsSubmitting(false);
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
            defaultValue={issue?.title}
            placeholder="Title"
            size="3"
            {...register("title")}
          />
        </TextFieldRoot>
        <ErrorsMessages>{errors.title?.message}</ErrorsMessages>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorsMessages>{errors.description?.message}</ErrorsMessages>
        <Button disabled={isSubmitting} type="submit" className="cursor-pointer">
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
