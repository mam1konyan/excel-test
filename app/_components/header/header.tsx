import githubLogo from './github.svg';

export const Header = () => {
  return (
    <header className="w-full px-6 py-3 bg-gray-900 text-white flex items-center justify-center">
      <p>
        For the full source code,{' '}
        <a
          href="https://github.com/mam1konyan/excel-test"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          click here{' '}
          <img src={githubLogo} alt="Github Logo" className="inline" />
        </a>
        .
      </p>
    </header>
  );
};
