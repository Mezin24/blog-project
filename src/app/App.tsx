import { Suspense, useState } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classnames } from 'shared/lib/classnames/classnames';
import { Modal } from 'shared/UI/Modal/Modal';
import { AppRouter } from './providers/AppRouter';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classnames(
        'app',
        { selected: true, red: false, hover: true },
        [theme]
      )}
    >
      <Suspense fallback=''>
        <Navbar />
        <button type='button' onClick={() => setIsOpen(true)}>
          open modal
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
          minus tempora quisquam amet, doloribus ipsum laudantium esse omnis
          ducimus debitis ad voluptatum, vero perferendis sunt iste obcaecati?
          Alias quaerat voluptatum excepturi voluptates! Asperiores consequuntur
          mquam! Veritatis, perferendis corporis esse soluta nisi aliquid id?
        </Modal>
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
