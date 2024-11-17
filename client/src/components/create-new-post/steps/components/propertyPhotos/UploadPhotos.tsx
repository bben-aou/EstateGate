import { DEFAULT_ALLOWED_TYPES, DEFAULT_MAX_FILES, DEFAULT_MAX_SIZE } from "@/constants/global/constants";
import useUploadPropertyPhotos, {
} from "@/hooks/stepper/steps/useUploadPropertyPhotos";
import { SelectedFile } from "@/interfaces/photos/types";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FormattedMessage } from "react-intl";


export interface ImageUploadProps {
  maxFileSize?: number;
  maxFiles?: number;
  allowedFileTypes?: string[];
  propertyId?: string;
  value?: SelectedFile[];
  onChange?: (files: SelectedFile[]) => void;
  onBlur?: () => void;
  onClick?: (value: string) => void;
}
const UploadPhotos = (props: ImageUploadProps) => {
  const {
    maxFileSize = DEFAULT_MAX_SIZE,
    maxFiles = DEFAULT_MAX_FILES,
    allowedFileTypes = DEFAULT_ALLOWED_TYPES,
    value = [],
    onChange,
    onBlur,
  } = props;

  const {
    dropZoneRef,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileSelect,
    removeFile,
    fileInputRef,
    isDragging,
  } = useUploadPropertyPhotos({
    maxFileSize,
    maxFiles,
    allowedFileTypes,
    value,
    onChange,
  });

  useEffect(() => {
    return () => {
      value.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [value]);

  return (
    <>
      <div
        className={cn(
          "w-[95%] h-[95%] border-dashed border-2 border-light-60 hover:bg-blue-50 rounded-lg flex-col flex items-center justify-center cursor-pointer",
          { "bg-blue-50": isDragging, hidden: value.length > 0 }
        )}
        ref={dropZoneRef}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        onBlur={onBlur}
        role="button"
        tabIndex={0}
      >
        <IoCloudUploadSharp className="w-[55px] h-[55px] text-light-60" />
        <h1 className="font-semibold">
          <FormattedMessage id="stepper.propertyPhotos.uploadImageOrDragAndDrop.label" />
        </h1>
        <h4 className="font-light tracking-wide leading-7">
          <FormattedMessage id="stepper.propertyPhotos.uploadInstructions" />
        </h4>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
      {value.length > 0 && (
        <div
          className="w-[95%] h-[100%] pt-[10px] px-[10px] flex flex-col gap-9"
          ref={dropZoneRef}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onBlur={onBlur}
          role="button"
          tabIndex={0}
        >
          <div className="w-full flex items-center justify-center gap-1">
            {value.map((file) => (
              <div key={file.id} className="relative">
                <img
                  src={file.preview}
                  alt={file.file.name}
                  className="w-[150px] h-[180px] rounded-md relative"
                />
                <IoCloseCircleOutline
                  className="absolute top-0 right-0 h-[20px] w-[20px] text-red-600"
                  onClick={() => removeFile(file.id)}
                />
              </div>
            ))}
          </div>
          <div
            className="self-center font-light text-gray-400 text-[14px]"
            ref={dropZoneRef}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <FormattedMessage id="stepper.propertyPhotos.clickOrDropToUpload" />
          </div>
        </div>
      )}
    </>
  );
};

export default UploadPhotos;
