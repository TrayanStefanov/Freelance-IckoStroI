import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { FiAlertCircle } from 'react-icons/fi'

const Error404 = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center font-pf">
      <FiAlertCircle className="text-red-600 text-6xl mb-6" />
      <h1 className="text-7xl font-bold mb-4">{t("404page.title")}</h1>
      <h2 className="text-3xl font-semibold mb-2 font-ms">{t("404page.subtitle")}</h2>
      <p className="mb-6 text-gray-700 max-w-md font-ns">{t("404page.text")}</p>
      <Link
        to="/"
        className="inline-block px-6 py-3 border-2 border-accent text-neutral rounded hover:text-accent transition">
        {t("404page.btn")}
      </Link>
    </div>
  );
};

export default Error404
