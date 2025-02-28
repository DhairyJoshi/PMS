"use client";

import React from "react";
import styles from "@/components/Pages/Profile/Welcome.module.css";
import Image from "next/image";

const ProfileInfo = () => {
  return (
    <>
      <div className={styles.welcomeBox}>
        <div className={styles.welcomeContent}>
          <h1>Welcome to icode49 Dashboard!</h1>
          <p>
            You have done 68% 😎 more activity today. Kuddos to your improvement!
          </p>
        </div>
        <Image src="/images/shape-1.png" alt="shape" width={110} height={78} />
      </div>
    </>
  );
};

export default ProfileInfo;
