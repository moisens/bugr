"use client";

import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const fetchUsers = async (): Promise<User[]> => {
  return await axios.get("/api/users")
}


const useFetcUsers = () => {
  return useQuery<User[]>(
    ["users"], fetchUsers, {
      staleTime: 300000,//5min
      retry: 3,
      keepPreviousData: true,
    }
  )
}

export default useFetcUsers;