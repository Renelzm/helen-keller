"use client";
import { Divider, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBallpenFilled,
  IconBuildingEstate,
  IconCash,
  IconDoorEnter,
  IconHome,
  IconMap2,
  IconMessageDots,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  opened: boolean;
  toggle: () => void;
  toggleDesk: () => void;
  desktopOpened: boolean;
  isDark: boolean;
};

export const HeaderLateral = ({ toggle, toggleDesk, isDark }: Props) => {
  const router = useRouter();
  const isXs = useMediaQuery("(max-width: 576px)");
  const handleClick = (ruta: string) => {
    toggle();
    toggleDesk();
    router.push(ruta);
  };
  const iconColor = "#428974"; // Default icon color for light mode
  

  const menu = [
    {
      icon: (
        <IconHome
          className="mr-3"
          size={isXs ? 35 : 32}
          color={isDark ? "#47AB8D" : iconColor}
        />
      ),
      label: "Inicio",
      href: "/",
    },
    {
      icon: (
        <IconUsersGroup
          className="mr-3"
          size={isXs ? 35 : 32}
          color={iconColor}
        />
      ),
      label: "Admisiones",
      href: "/",
    },
    {
      icon: (
        <IconBuildingEstate
          className="mr-3"
          size={isXs ? 35 : 32}
          color={iconColor}
        />
      ),
      label: "Nosotros",
      href: "/",
    },

    {
      icon: (
        <IconMap2 className="mr-3" 
        size={isXs ? 35 : 32} color={iconColor} />
      ),
      label: "Mapa",
      href: "/map",
    },
    {
      icon: (
        <IconMessageDots
          className="mr-3"
          size={isXs ? 35 : 32}
          color={iconColor}
        />
      ),
      label: "Contacto",
      href: "/contactos",
    },
    {
      icon: (
        <IconBallpenFilled
          className="mr-3"
          size={isXs ? 35 : 32}
          color={iconColor}
        />
      ),
      label: "Mensaje del Director",
      href: "/",
    },
  ];


  return (
    <>
         <div className=" flex text-center w-auto justify-center p-4"><Image  src={`/helen-keller/helenkellerletras.png`} width={200} height={400} alt="Logo"  style={{ cursor: 'pointer' }}  className="hover:opacity-75 transition-opacity duration-200" /></div>
      {menu.map((item, index) => (
        <div key={index} >
         
          <button
            className={`flex p-3 rounded-md border border-transparent py-2 px-4 items-center hover:opacity-90 max-w-xs transition duration-300 ease-in-out hover:scale-125 group-hover:w-full  focus:bg-slate-100 active:bg-slate-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${ isXs ? "mt-5"  : "mt-2" }`}
            onClick={() => handleClick(item.href)}
          >
     
         
            {item.icon}
         
            <Title order={isXs ? 3 : 5} c={ isDark ? "white" : "#5b5b55" }  >
              {item.label}
            </Title>
          </button>
        </div>
      ))}

      <Divider
        mt={22}
        size="xl"
        label={
          <Image
            src="/helen-keller/uno_logo_color.png"
            alt=""
            width={50}
            height={30}
            className=" align-middle justify-center text-center mt-1"
          />
        }
      />
      <div className="flex flex-col items-center justify-center mt-3 ">
        <button
          onClick={() =>
            handleClick("https://edi-unoi-mx.stn-neds.com/ts/view/access")
          }
          className="flex items-center p-1.5 mt-3 rounded-lg border py-1 px-3 text-center text-xs hover:opacity-90 max-w-xs transition duration-300 ease-in-out hover:scale-110 group-hover:w-full focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <IconDoorEnter color="#797864" className=" mr-2" />
          <Title order={isXs ? 3 : 5} c={isDark ? "white" : "#5b5b55"}>
            Alumnos
          </Title>
        </button>

        <button
          onClick={() =>
            handleClick("https://payment.uno-internacional.com/mx/unoi/welcome")
          }
  className="flex items-center p-1.5 mt-3 rounded-lg border py-1 px-3 text-center text-xs hover:opacity-90 max-w-xs transition duration-300 ease-in-out hover:scale-110 group-hover:w-full focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
          <IconCash color="#797864" className=" mr-2" />
          <Title order={isXs ? 3 : 6} c={ isDark ? "white" : "#5b5b55" }>
            Pagos-Uno
          </Title>
        </button>

      </div>
    </>
  );
};
