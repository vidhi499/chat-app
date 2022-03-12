import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const useAuthCheck = () => {
  const user = supabase.auth.user();
  console.log(user);

  return { user };
};

export default useAuthCheck;
