import fetch from "node-fetch";

test("test server live", async () => {
  const response = await fetch(
    "http://localhost:5001/jacobdsmith-81e81/us-central1/testConnection",
    {
      method: "GET",
    }
  );
  const status = response.status;
  const statusOK = response.ok;
  expect(status).toBe(200);
  expect(statusOK).toBe(true);
});

describe("Make post request and get all projects", () => {
  const bodyData = {
    title: "Demo Project",
    icon: "https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA=w480-h960",
    technologies: ["C++", "Qt5"],
    tagline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit posuere volutpat. Duis cursus condimentum massa, ac fringilla metus. Mauris tempor lorem nec mattis lacinia. Etiam aliquet felis sit amet lectus mattis, quis porttitor metus suscipit. Maecenas pulvinar tempor lacus, eu pharetra lacus pulvinar quis. Fusce ultricies augue quis diam.",
    href: "https://github.com/jdsmith104/about-me",
  };
  test("post project successful", async () => {
    let response = await fetch(
      "http://localhost:5001/jacobdsmith-81e81/us-central1/addProject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );

    const status = response.status;
    const statusOK = response.ok;

    expect(status).toBe(200);
    expect(statusOK).toBe(true);
  });

  test("get projects request successful", async () => {
    const response = await fetch(
      "http://localhost:5001/jacobdsmith-81e81/us-central1/getProjects",
      {
        method: "GET",
      }
    );
    const responseBody: any = await response.json();
    // Array of project documents
    const projects: Array<any> = responseBody.data;
    expect(projects.length).toBeGreaterThanOrEqual(1);

    const status = response.status;
    const statusOK = response.ok;

    expect(status).toBe(200);
    expect(statusOK).toBe(true);
  });
});

describe("Make post request and get specific project", () => {
  const projectIDs: Array<string> = [];

  test("post projects successful", async () => {
    const projectTitlePrefix: string = "Demo project ";
    const bodyData = {
      title: "",
      icon: "https://play-lh.googleusercontent.com/1nfAdJs2Ep2q1skM7QwJ1uHooWSbpFkbIBHhAX6EmdzEKmtk42713TiTU28mWlkcFKPA=w480-h960",
      technologies: ["C++", "Qt5"],
      tagline:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit posuere volutpat. Duis cursus condimentum massa, ac fringilla metus. Mauris tempor lorem nec mattis lacinia. Etiam aliquet felis sit amet lectus mattis, quis porttitor metus suscipit. Maecenas pulvinar tempor lacus, eu pharetra lacus pulvinar quis. Fusce ultricies augue quis diam.",
      href: "https://github.com/jdsmith104/about-me",
    };

    for (let index: number = 0; index < 3; index++) {
      bodyData.title = projectTitlePrefix + index.toString();

      const response = await fetch(
        "http://localhost:5001/jacobdsmith-81e81/us-central1/addProject",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );

      const status = response.status;
      const statusOK = response.ok;
      const responseBody: any = await response.json();
      projectIDs.push(responseBody.data.id);

      expect(status).toBe(200);
      expect(statusOK).toBe(true);
    }
  });

  test("get specific project by id", async () => {
    const projectsUrl =
      "http://localhost:5001/jacobdsmith-81e81/us-central1/getProjects?id=" +
      projectIDs[0];

    const response = await fetch(projectsUrl, {
      method: "GET",
    });
    const responseBody: any = await response.json();
    const project: any = responseBody.data;
    expect(project.id).toBe(projectIDs[0]);

    const status = response.status;
    const statusOK = response.ok;

    expect(status).toBe(200);
    expect(statusOK).toBe(true);
  });
});
