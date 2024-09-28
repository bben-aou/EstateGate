import { copyToClipboard } from "@/utils/copyToClipboard";

describe('copyToClipboard', () => {
  let mockInputElement: HTMLInputElement;

  beforeEach(() => {
    mockInputElement = document.createElement('input');
    mockInputElement.value = 'Test text to copy';
    
    // Mock console.error to prevent logging during tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should use navigator.clipboard.writeText when available', async () => {
    const writeTextMock = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: writeTextMock },
      configurable: true,
    });
    Object.defineProperty(window, 'isSecureContext', {
      value: true,
      configurable: true,
    });

    const result = await copyToClipboard(mockInputElement);

    expect(result).toBe(true);
    expect(writeTextMock).toHaveBeenCalledWith('Test text to copy');
  });

  it('should return false when copying fails', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: jest.fn().mockRejectedValue(new Error('Copying failed')) },
      configurable: true,
    });
    Object.defineProperty(window, 'isSecureContext', {
      value: true,
      configurable: true,
    });

    const result = await copyToClipboard(mockInputElement);

    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith('Failed to copy text: ', expect.any(Error));
  });
});