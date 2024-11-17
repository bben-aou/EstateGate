import { useToast } from "@/hooks/use-toast";
import { SelectedFile } from "@/interfaces/photos/types";
import { cn } from "@/lib/utils";
import { ChangeEvent, DragEvent, useRef, useState } from "react";

interface UseUploadPropertyPhotosProps {
  maxFileSize: number;
  maxFiles: number;
  allowedFileTypes: string[];
  value?: SelectedFile[];
  onChange?: (files: SelectedFile[]) => void;
}

const useUploadPropertyPhotos = (props: UseUploadPropertyPhotosProps) => {
  const { 
    maxFileSize, 
    maxFiles, 
    allowedFileTypes,
    value = [],
    onChange 
  } = props;

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const validateFile = (file: File): string | null => {
    if (!allowedFileTypes.includes(file.type)) {
      return `${file.name} is not a supported file type`;
    }
    if (file.size > maxFileSize) {
      return `${file.name} is too large (max ${maxFileSize / (1024 * 1024)}MB)`;
    }
    if (value.length >= maxFiles) {
      return `Maximum ${maxFiles} files allowed`;
    }
    return null;
  };

  const processFiles = (files: FileList | File[]): void => {
    const newFiles: SelectedFile[] = [];

    Array.from(files).forEach((file) => {
      const error = validateFile(file);
      if (error) {
        toast({
          title: "Error processing",
          variant: "destructive",
          description: error,
          duration: 4000,
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
          ),
        });
        return;
      }

      newFiles.push({
        file,
        preview: URL.createObjectURL(file),
        id: `${file.name}-${Date.now()}`,
      });
    });

    if (onChange && newFiles.length > 0) {
      const updatedFiles = [...(value || []), ...newFiles];
      onChange(updatedFiles);
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      processFiles(event.target.files);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.currentTarget === dropZoneRef.current) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    processFiles(files);
  };

  const removeFile = (id: string): void => {
    if (onChange) {
      const fileToRemove = value.find((f) => f.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
        const updatedFiles = value.filter((file) => file.id !== id);
        onChange(updatedFiles);
      }
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return {
    handleFileSelect,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    removeFile,
    dropZoneRef,
    isDragging,
    fileInputRef,
  };
};

export default useUploadPropertyPhotos;