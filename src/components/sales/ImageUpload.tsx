import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IImageUploadProps {}

const ImageUpload: React.FunctionComponent<IImageUploadProps> = (props) => {
  const [previewSrcs, setPreviewSrcs] = React.useState<string[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPreviewSrcs: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const src = URL.createObjectURL(file);
        newPreviewSrcs.push(src);
      }
      setPreviewSrcs(newPreviewSrcs);
      // 파일을 서버로 업로드하거나 추가 처리를 여기에 작성할 수 있습니다.
      console.log("Selected files:", files);
    }
  };

  return (
    <div>
      <div onClick={handleImageClick} className="cursor-pointer relative">
        {previewSrcs.length > 0 ? (
          <div className="relative w-full h-full flex items-center justify-center ">
            <Image
              src="/images/salesimagebackground.png"
              alt="salesbackground"
              width={600}
              height={620}></Image>
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-2 m-12">
              {previewSrcs.map((src, index) => (
                <div className="flex justify-center items-center overflow-hidden">
                  <div
                    className={cn(
                      index == 0
                        ? "relative border-2 border-primary rounded-lg"
                        : "relative rounded-lg"
                    )}>
                    <div className="absolute  top-0 left-0 p-1">
                      <div className="relative">
                        <Image
                          src={`/icons/photocard_${index + 1}.png`}
                          alt="photocardicon"
                          width={32}
                          height={32}></Image>
                        <span
                          className={cn(
                            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary text-sm font-bold"
                          )}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    {index == 0 && (
                      <div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 text-center bg-primary text-white text-sm p-1.5"
                        )}>
                        대표사진
                      </div>
                    )}
                    <Image
                      key={index}
                      src={src}
                      alt={`Preview ${index + 1}`}
                      width={180}
                      height={300}
                      className="rounded-md"
                      objectFit="contain"></Image>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Image
            src="/images/imageupload.png"
            alt="imageupload"
            width={530}
            height={620}
          />
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />
    </div>
  );
};

export default ImageUpload;
