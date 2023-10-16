"use client";

import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get("/api/users");
  return response.data;
};

const useFetchUsers = () => {
  return useQuery<User[], Error>(["users"], fetchUsers, {
    staleTime: 1000 * 60 * 60,
    retry: 3,
    keepPreviousData: true,
  });
};

export default useFetchUsers;
