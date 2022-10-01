import Head from 'next/head'

export default function Page({children}) {
  return (
    <>
      <Head>
      </Head>

      <main style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100wh",
        background: "var(--background-base)",
        color: "var(--text-light)"
      }}>
        <header style={{
          height: "60px",
          width: "100%",
          background: "var(--foreground)"
        }}>
        </header>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{
            width: "60%",
            height: "auto",
            marginTop: "40px",
            borderRadius: "40px",
            padding: "40px",
            background: "var(--background)",
            minHeight: "100vh"
          }}>
            {children}
          </div>
        </div>
        <footer style={{
          marginTop: "auto",
        }}>
          <div style={{
            marginTop: "20px",
            background: "var(--background)",
          }}>
            halloj
          </div>
        </footer>
      </main>
    </>
  )
}
