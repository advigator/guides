
<div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
<nav aria-labelledby="on-this-page-title" className="w-56">
  {tableOfContents.length > 0 && (
    <>
      <h2
        id="on-this-page-title"
        className="font-display text-sm font-medium text-slate-900 dark:text-white"
      >
        On this page
      </h2>
      <ol role="list" className="mt-4 space-y-3 text-sm">
        {tableOfContents.map((section) => (
          <li key={section.id}>
            <h3>
              <Link
                href={`#${section.id}`}
                className={clsx(
                  isActive(section)
                    ? 'text-green-500'
                    : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                )}
              >
                {section.title}
              </Link>
            </h3>
            {section.children.length > 0 && (
              <ol
                role="list"
                className="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
              >
                {section.children.map((subSection) => (
                  <li key={subSection.id}>
                    <Link
                      href={`#${subSection.id}`}
                      className={
                        isActive(subSection)
                          ? 'text-green-500'
                          : 'hover:text-slate-600 dark:hover:text-slate-300'
                      }
                    >
                      {subSection.title}
                    </Link>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </>
  )}
</nav>
</div>