import fetch from "node-fetch";

const baseUrl = "http://localhost:5001/jacobdsmith-81e81/us-central1/app";

test("test server live", async () => {
  const response = await fetch(baseUrl, {
    method: "GET",
  });
  const status = response.status;
  const statusOK = response.ok;
  expect(status).toBe(200);
  expect(statusOK).toBe(true);
});

describe("Make post request and get project", () => {
  test("post project successful", async () => {
    const bodyData = {
      title: "Demo Project",
      icon: "https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA=w480-h960",
      technology: ["C++", "Qt5"],
      tagline:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit posuere volutpat. Duis cursus condimentum massa, ac fringilla metus. Mauris tempor lorem nec mattis lacinia. Etiam aliquet felis sit amet lectus mattis, quis porttitor metus suscipit. Maecenas pulvinar tempor lacus, eu pharetra lacus pulvinar quis. Fusce ultricies augue quis diam.",
      href: "https://github.com/jdsmith104/about-me",
    };

    const projectsUrl = baseUrl + "/projects";

    let response = await fetch(projectsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const status = response.status;
    const statusOK = response.ok;

    expect(status).toBe(200);
    expect(statusOK).toBe(true);
  });

  test("get projects request successful", async () => {
    const projectsUrl = baseUrl + "/projects";

    const response = await fetch(projectsUrl, {
      method: "GET",
    });
    const responseBody: any = await response.json();
    const projects: Array<any> = responseBody.data;
    projects.forEach((project) => {
      console.log(project);
    });

    const status = response.status;
    const statusOK = response.ok;

    expect(status).toBe(200);
    expect(statusOK).toBe(true);
  });
});
