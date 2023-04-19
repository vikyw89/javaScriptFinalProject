import { Page } from "@/common/layout/page";
import { SignInComponent } from "@/components/signIn";
import { supabase } from "@/lib/supabase";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import { updateAsyncV, updateSyncV, useQueryV , useSyncV} from "use-sync-v";

const inter = Inter({ subsets: ["latin"] });

updateSyncV("show.signInComponent", true)

const getAuth = async () => {
  // const response = await supabase.auth.signInWithOAuth({ provider: "google" });
  const response = await supabase.auth.getSession();
  return response;
};

const signIn = async () => {
  const response = await supabase.auth.signInWithOAuth({ provider: "google" });
  return response;
};

export default function Home() {
  const { data, error, loading } = useQueryV("auth", getAuth);
  const activeTheme = useSyncV("activeTheme")
  const showSignInComponent = useSyncV("show.signInComponent")
  useEffect(()=>{
    document.querySelector('html').setAttribute('data-theme',activeTheme)
  })
  const signInHandler = () => {
    updateAsyncV("auth", signIn);
  };

  return (
    <Page>
      {showSignInComponent && <SignInComponent/>}
      {loading && <div className="text-base-content">Loading...</div>}
    </Page>
  );
}
