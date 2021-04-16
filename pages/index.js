import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const rootURL = "https://nextjs-zeta-bice.vercel.app";
  return (
    <div className={styles.container}>
      <Head>
        <title> QRCode API | Generate QRCode with URL GET request</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>QRCode API</h1>

        <p className={styles.description}>
          You can create a QR code on the fly with a URL GET request.
        </p>
        <h2 id="syntax" data-text="Syntax    " role="presentation">
          <span className="devsite-heading" role="heading" aria-level="2">
            <a name="overview" id="overview"></a>Syntax{" "}
          </span>
        </h2>
        <p>
          <strong>Root URL:</strong>{" "}
          <code translate="no" dir="ltr">
            {rootURL}/api/qrcode?
          </code>
        </p>
        <p>
          {" "}
          QR code requests support the following URL query parameters after the
          ? in the root URL:
        </p>
        <div className={styles.table}>
          <table cellSpacing="code" cellPadding="1">
            <tbody>
              <tr>
                <th scope="col">Parameter</th>
                <th scope="col">Required or Optional</th>
                <th scope="col">Description</th>
              </tr>
              <tr>
                <td>
                  <code translate="no" dir="ltr">
                    cht=qr
                  </code>
                </td>
                <td>
                  <strong>Required</strong>
                </td>
                <td>Specifies a QR code.</td>
              </tr>
              <tr>
                <td>
                  <code translate="no" dir="ltr">
                    chs=&lt;<em>width</em>&gt;x&lt;<em>height</em>&gt;
                  </code>
                </td>
                <td>
                  <strong>Required</strong>
                </td>
                <td> Image size.</td>
              </tr>
              <tr>
                <td>
                  <code translate="no" dir="ltr">
                    chl=&lt;<em>data</em>&gt;
                  </code>
                </td>
                <td>
                  <strong>Required</strong>
                </td>
                <td>
                  The data to encode. Data can be digits (0-9), alphanumeric
                  characters, binary bytes of data, or Kanji. You cannot mix
                  data types within a QR code. The data must be UTF-8
                  URL-encoded. Note that URLs have a 2K maximum length, so if
                  you want to encode more than 2K bytes (minus the other URL
                  characters), you will have to send your data using POST.
                </td>
              </tr>
              <tr>
                <td>
                  <code translate="no" dir="ltr">
                    choe=&lt;<em>output_encoding</em>&gt;
                  </code>
                </td>
                <td>Optional</td>
                <td>
                  How to encode the data in the QR code. Here are the available
                  values:
                  <ul>
                    <li>
                      <code translate="no" dir="ltr">
                        UTF-8
                      </code>{" "}
                      [<em>Default</em>]
                    </li>
                    <li>
                      <code translate="no" dir="ltr">
                        Shift_JIS
                      </code>
                    </li>
                    <li>
                      <code translate="no" dir="ltr">
                        ISO-8859-1
                      </code>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <code translate="no" dir="ltr">
                    chld=&lt;<em>error_correction_level</em>&gt;|&lt;
                    <em>margin</em>&gt;
                  </code>
                </td>
                <td>Optional</td>
                <td>
                  <ul>
                    <li>
                      <em>error_correction_level</em> - QR codes support four
                      levels of error correction to enable recovery of missing,
                      misread, or obscured data. Greater redundancy is achieved
                      at the cost of being able to store less data. See the{" "}
                      <a href="#details">appendix</a> for details. Here are the
                      supported values:
                      <ul>
                        <li>
                          <code translate="no" dir="ltr">
                            L
                          </code>{" "}
                          - [<em>Default</em>] Allows recovery of up to 7% data
                          loss
                        </li>
                        <li>
                          <code translate="no" dir="ltr">
                            M
                          </code>{" "}
                          - Allows recovery of up to 15% data loss
                        </li>
                        <li>
                          <code translate="no" dir="ltr">
                            Q
                          </code>{" "}
                          - Allows recovery of up to 25% data loss
                        </li>
                        <li>
                          <code translate="no" dir="ltr">
                            H
                          </code>{" "}
                          - Allows recovery of up to 30% data loss
                        </li>
                      </ul>
                    </li>
                    <li>
                      <em>margin</em> - The width of the white border around the
                      data portion of the code. This is in <em>rows</em>, not in{" "}
                      <em>pixels</em>. (See
                      <a href="#details">below</a> to learn what rows are in a
                      QR code.) The default value is 4.
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Example:</strong>
          </p>
          <p>
            <img
              src={
                rootURL +
                "/api/qrcode?chs=150x150&amp;cht=qr&amp;chl=Hello%20world&amp;choe=UTF-8"
              }
              alt="QR code"
            ></img>
          </p>
          <p>
            <code translate="no" dir="ltr">
              cht=qr<br></br>chl=Hello+world<br></br>choe=UTF-8
            </code>
          </p>
          <div>
            * Origin API is provided by{" "}
            <a href="https://developers.google.com/chart/infographics/docs/qr_codes">
              {" "}
              Google Chart API
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
