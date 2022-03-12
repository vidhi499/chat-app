import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

const useSessionCheck = () => {
  const session = supabase.auth.session();
  console.log(session);

  return { session };
};

export default useSessionCheck;
