import { Suspense, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';
import { Modal } from '@/shared/ui/Modal/Modal';

function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button type="button" onClick={() => setIsOpen(true)}>
          toggle
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          laudantium dignissimos velit, at incidunt possimus consectetur ipsum
          officia qui sit.
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
