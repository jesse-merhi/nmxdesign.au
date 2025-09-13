import { animated, useSpring } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiDownload } from 'react-icons/fi';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPdfLoaded, setPdfLoaded] = useState(false);

  const animation = useSpring({
    opacity: isPdfLoaded ? 1 : 0,
    transform: isPdfLoaded ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 220, friction: 30 },
    delay: 100,
  });

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPdfLoaded(true);
  };

  const goToPreviousPage = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => (prev < (numPages || 1) ? prev + 1 : prev));
  };

  const pdfPath = '/resume.pdf';
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(800);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      // Keep within 800px but fit container on small screens, with small padding
      setPageWidth(Math.min(800, Math.max(320, w - 24)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full p-8">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      <style>{`.loader { border-top-color: #AAAADD; animation: spinner 1.5s linear infinite; } @keyframes spinner { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );

  const ErrorMessage = () => (
    <p className="p-4 text-center text-red-500">
      Failed to load PDF.
      <a href={pdfPath} download="MyResume.pdf" className="font-bold underline hover:text-red-700">
        {' '}
        Download it here.
      </a>
    </p>
  );

  return (
    <animated.div style={animation} className="flex flex-col items-center h-full py-8">
      <div className="w-full max-w-4xl h-full flex flex-col">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
            >
              <FiArrowLeft />
            </button>
            <span className="text-gray-700 font-medium">
              Page {pageNumber} of {numPages || '--'}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= (numPages || 1)}
              className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
            >
              <FiArrowRight />
            </button>
          </div>
          <a
            href={pdfPath}
            download="MyResume.pdf"
            className="inline-flex items-center gap-2 bg-[#AAAADD] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#9999CC] transition-colors duration-300"
          >
            <FiDownload />
            Download
          </a>
        </div>

        <div
          ref={containerRef}
          className="h-[90%] w-full border-2 border-gray-200 rounded-lg shadow-inner overflow-auto"
        >
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<LoadingSpinner />}
            error={<ErrorMessage />}
            className="flex justify-center"
          >
            <Page pageNumber={pageNumber} renderTextLayer={true} renderAnnotationLayer={false} width={pageWidth} />
          </Document>
        </div>
      </div>
    </animated.div>
  );
};

export default Resume;
