export interface SelectedFile {
    file: File;
    preview: string;
    id: string;
  }
  
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