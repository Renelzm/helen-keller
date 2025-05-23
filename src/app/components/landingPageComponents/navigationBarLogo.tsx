'use client'

import { Container, Tabs, Title } from "@mantine/core";
import { IconBooks, IconChalkboard, IconPackages } from "@tabler/icons-react";
import React from "react";
import classes from './HeaderTabs.module.css';
import Link from "next/link";
import Image from "next/image";

export const NavigationBarLogo = () => {
  return (
    <div className={`${classes.header} mb-7`} >
     <div className=" flex text-center w-auto justify-center mb-8"><Image  src={`/helen-keller/59e76b0d8c18a2.png`} width={200} height={40} alt="Logo"  style={{ cursor: 'pointer' }}  className="hover:opacity-75 transition-opacity duration-200" /></div>  
    <Container  size="md">
      

    <Tabs
      defaultValue="first"
      className="ml-auto"
      style={{
        // Posición absoluta para que no interfiera// Ajusta el valor según el espacio necesario
        width: "100%",
      }}
      classNames={{
        root: classes.tabs,
        list: classes.tabsList,
        tab: classes.tab,
      }}
      >
      <Tabs.List justify="center">
      <Link href={"/preescolar"}>
        <Tabs.Tab
          value="Preescolar"
          leftSection={<IconPackages style={{ color: "#47ab8d" }} />}
        >
          <Title order={3}>Preescolar</Title>
        </Tabs.Tab>
        </Link>
        <Link href={"/primaria"}>
        <Tabs.Tab 
        value="Primaria"
        leftSection={<IconChalkboard style={{color:"#ffab09"}}/>}>
          <Title order={3}>Primaria</Title>
        </Tabs.Tab>
          </Link>
          <Link href={"/secundaria"}>
        <Tabs.Tab 
        value="Secundaria"
        leftSection={<IconBooks style={{color:"#f01879"}}/>}>
          <Title order={3}>Secundaria</Title>
        </Tabs.Tab>
        </Link>
      </Tabs.List>
    </Tabs>
          </Container>
          </div>
  );
};
