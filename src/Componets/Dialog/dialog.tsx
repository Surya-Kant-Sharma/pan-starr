import React from "react";
import "./dialog.css";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface props {
  open: boolean;
  setOpen: any;
  id: string;
}

const ShareDialog = ({ open, setOpen, id }: props) => {
  return (
    <>
      {open ? (
        <div className="root_section" onClick={() => setOpen(false)}>
          <div className="inner_section">
            <h1 className="title counter">Share Collections</h1>
            {/* share system  */}
            <div className="icon_area_share">
              <div className="icon_section_share">
                <FacebookShareButton
                  url={"https://localhost:3000/"}
                  quote={"Most wornderful site"}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </div>

              <div className="icon_section_share">
                <WhatsappShareButton
                  url={"https://localhost:3000/"}
                  //   quote={"Most wornderful site"}
                >
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>
              </div>

              <div className="icon_section_share">
                <TelegramShareButton
                  url={"https://localhost:3000/"}
                  //   quote={"Most wornderful site"}
                >
                  <TelegramIcon size={40} round />
                </TelegramShareButton>
              </div>

              <div className="icon_section_share">
                <LinkedinShareButton
                  url={"https://localhost:3000/"}
                  //   quote={"Most wornderful site"}
                >
                  <LinkedinIcon size={40} round />
                </LinkedinShareButton>
              </div>

              <div className="icon_section_share">
                <RedditShareButton
                  url={"https://localhost:3000/"}
                  //   quote={"Most wornderful site"}
                >
                  <RedditIcon size={40} round />
                </RedditShareButton>
              </div>

              <div className="icon_section_share">
                <TwitterShareButton
                  url={"https://localhost:3000/"}
                  //   quote={"Most wornderful site"}
                >
                  <TwitterIcon size={40} round />
                </TwitterShareButton>
              </div>
            </div>

            <div className="copy_section_share">
                <p className="text-ellipsis">{`http://www${window.location.hostname}/collection/${id}`}<span className="btn br-10 p-1 ml-2 rounded-full cursor-pointer sm text-[14px] w-1" onClick={() => {
                navigator.clipboard.writeText(`http://www${window.location.hostname}/collection/${id}`);
              }}>Copy</span></p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShareDialog;
