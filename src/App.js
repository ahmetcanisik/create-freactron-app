function App() {
  return (
      <main className="flex flex-col gap-10 my-10 justify-center items-center w-full">
        <h1 className="text-4xl">react ve electron'u birlikte kullanmak</h1>
        <ul className="list-disc list-inside">
          <li>
            react uygulamanızı, <code>yarn start</code> diyerek görüntüleyebilirsiniz.
          </li>
          <li>
            electron uygulamanızı görüntülemek için öncelikle <code>yarn build</code> demeniz ve
            ardından <code>yarn electron</code> diyerek electron uygulamanızı görebilirsiniz.
          </li>
        </ul>
      </main>
  );
}

export default App;