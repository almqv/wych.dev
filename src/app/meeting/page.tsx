"use client";

import { redirect } from "next/navigation";

const SCHEDULING_URL = "https://cal.com/elias-almqvist-d33wxo";

// Redirect to the external URL
const Page = () => {
  redirect(SCHEDULING_URL);
};

export default Page;
