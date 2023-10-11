"use client";

import { Button, Callout, TextField, TextFieldRoot } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

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

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type IssueFormDataType = z.infer<typeof createIssuesSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueFormDataType>({
    resolver: zodResolver(createIssuesSchema),
  });
  const router = useRouter();

  const handleOnSubmit = handleSubmit(async (data) => {
    try {
      if (issue) await axios.patch(`/api/issues/${issue.id}`, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
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
        <Button disabled={isSubmitting}>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {/*//TODO: Check if the condition works accurately!*/}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
