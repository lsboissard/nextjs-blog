'use client'
import React, { useState } from "react";
import { Toaster, toast } from 'sonner'
import DeleteIcon from "./icons/delete-icon";

// interface BookmarkStatus {
//   isBookmarked: boolean;
// }

export default function BookmarkButton() {
  const [isToggled, setToggled] = useState(false);

  function handleToggleBookmark() {
    setToggled(!isToggled);

    const promise = () => new Promise((resolve) => setTimeout(() => resolve(''), 500));

    if (isToggled) {
      toast.promise(promise, {
        loading: 'Processando...',
        icon: <DeleteIcon />,
        success: function (data) {
          return 'Removido dos favoritos.';
        },
        error: 'Ops! Ocorreu um erro. Tente Novamente.',
      });

    } else {
      toast.promise(promise, {
        loading: 'Processando...',
        success: function (data) {
          return 'Adicionado aos favoritos!';
        },
        error: 'Ops! Ocorreu um erro. Tente Novamente.',
      });
    }
  }

  return (
    <>
      <Toaster />
      <button className="absolute right-3 top-3" onClick={handleToggleBookmark}>
        <div className="flex items-center justify-center hover:bg-white/95 hover:transition-all rounded-full h-8 bg-white/85 w-8">
          {isToggled == false &&
            <svg className="h-4 text-zinc-500" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.23207 22.6515L4.23203 22.6514L4.22222 22.6583C3.04571 23.4839 1.4214 22.7367 1.30876 21.2843C1.17636 19.577 0.999972 16.4489 1 11.9001V11.818V11.818C0.999969 10.0123 1.00095 8.43904 1.12977 7.12626C1.26038 5.79534 1.53147 4.60354 2.16092 3.63277C3.47718 1.60276 6.0125 1.01675 9.99586 1.00034C13.9839 0.983921 16.5228 1.56716 17.8404 3.61005C18.4689 4.58457 18.7397 5.7819 18.8703 7.11733C18.9991 8.43513 19 10.0125 19 11.8189V11.9001C19 16.4489 18.8236 19.577 18.6912 21.2843C18.5785 22.7367 16.9543 23.4839 15.7778 22.6583L15.7778 22.6583L15.7679 22.6515C14.7359 21.9456 13.7808 21.1856 13.0366 20.5931L13.0231 20.5824C12.6849 20.3132 12.378 20.0688 12.1372 19.8903C11.6855 19.5554 11.3082 19.3268 10.9587 19.186C10.5782 19.0328 10.271 19 10 19C9.729 19 9.42177 19.0328 9.04133 19.186C8.69178 19.3268 8.31454 19.5554 7.86274 19.8903L8.45823 20.6937L7.86274 19.8903C7.62195 20.0688 7.31488 20.3133 6.97665 20.5826L6.96343 20.5931C6.21919 21.1856 5.26412 21.9456 4.23207 22.6515Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5.00391C13 5.00391 13.5 5.00011 14.25 5.74817C15 6.49623 15 9.00001 15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          {isToggled == true &&
            <svg className="h-4 text-zinc-500" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.311757 21.3605C0.177361 19.6277 -2.80945e-05 16.474 9.92572e-07 11.8995V11.8175C-3.11939e-05 10.0271 -5.95599e-05 8.39995 0.134554 7.02826C0.270859 5.63932 0.563251 4.2585 1.32186 3.08858C2.95464 0.570543 6.02601 0.0166812 9.99174 0.000351648C13.966 -0.0160128 17.0451 0.532006 18.6807 3.06788C19.4375 4.24119 19.7294 5.6269 19.8655 7.01971C20.0001 8.39618 20 10.0272 20 11.8183V11.8995C20 16.474 19.8226 19.6277 19.6882 21.3606C19.5145 23.6004 17.0014 24.7374 15.2034 23.4758C14.1373 22.7466 13.1556 21.9651 12.4137 21.3744C12.0646 21.0965 11.7685 20.8608 11.5418 20.6927C10.7027 20.0708 10.3437 19.999 10 19.999C9.65633 19.999 9.29727 20.0708 8.45823 20.6927C8.23146 20.8608 7.93535 21.0965 7.58629 21.3744C6.84434 21.9651 5.86269 22.7466 4.79665 23.4757C2.9986 24.7375 0.485477 23.6004 0.311757 21.3605ZM12 6C12.5409 6 12.7693 6.00621 12.9588 6.05722C13.0909 6.0928 13.2567 6.16589 13.5438 6.45228C13.5436 6.45204 13.5436 6.4521 13.5438 6.45228C13.546 6.4548 13.5696 6.48166 13.6051 6.55181C13.643 6.62677 13.6842 6.73092 13.7249 6.86796C13.807 7.14479 13.8689 7.49466 13.9124 7.88604C13.9992 8.66817 14 9.49202 14 9.99609C14 10.5484 14.4477 10.9961 15 10.9961C15.5523 10.9961 16 10.5484 16 9.99609V9.98426C16 9.48552 16 8.56498 15.9001 7.66536C15.8498 7.2123 15.7711 6.73346 15.6423 6.29919C15.5202 5.88773 15.3203 5.39945 14.9562 5.03624C14.4933 4.57456 14.0341 4.27553 13.4787 4.126C13.0074 3.99908 12.5149 3.99954 12.0743 3.99995L12 4C11.4477 4 11 4.44772 11 5C11 5.55229 11.4477 6 12 6Z"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
              />
            </svg>
          }
        </div>
      </button>
    </>

  )
}