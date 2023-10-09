"use client";

import "easymde/dist/easymde.min.css";
import {
  TextField,
  TextFieldRoot,
  Button,
  Callout,
  Text,
} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";

import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
            setSubmitError(
              "Unable to submit the issue. All fields must be filled!"
            );
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
        {errors.title ? (
          <Text color="tomato" as="p">
            {errors.title.message}
          </Text>
        ) : null}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description ? (
          <Text color="tomato" as="p">
            {errors.description.message}
          </Text>
        ) : null}
        <Button>{isSubmitting ? "Submitting..." : "Submit New Issue"}</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
