/* istanbul ignore file */
import React, { useState, useEffect } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Database } from "@/types/supabase-types";
import ContentMeta from "@/components/content-pages/content-meta";

export default function ProfilePage({ slug }) {
  const [profileData, setProfileData] = useState<any>({});
  const user = useUser();
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    const fetchData = async () => {
      if (user && slug) {
        const response = await supabaseClient
          .from("pilots")
          .select()
          .eq('slug', slug);
  
        if (!response.error && response.data.length === 1) {
          setProfileData(response.data[0]);
        } else {
          console.log("Error:", response.error);
        }
      }
    }

    fetchData();
  }, [user, slug]);

  return (
    <div className="max-w-screen-lg mx-auto bg-base-100">
      <ContentMeta
        title="XC Pilot Info - Profile"
        description="XC Pilot profile page"
        socialImage={`/api/og?title=Basejump`}
      />
      {profileData.email ? (
        <div className="pt-8 pb-24 md:pt-36 md:pb-48">
          <h2 className="h2 text-center my-2">
            {user.email === profileData.email ? `Hi ${profileData.prename} ${profileData.lastname}!` : `${profileData.prename} ${profileData.lastname}`}
          </h2>
        </div>
      ) : (
        <div className="pt-8 pb-24 md:pt-36 md:pb-48">
          <p className="text-center">
          Loading profile ...
          </p>
        </div>
      )}
    </div>
  );
};
