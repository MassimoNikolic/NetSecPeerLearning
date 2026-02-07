export interface vulnerability {
    title: string,
    name: string,
    link: string
}

export const vulnerabilities: vulnerability[] = [
    {
        title: "Cross-site Scripting",
        name: "Improper Neutralization of Input During Web Page Generation",
        link: "https://cwe.mitre.org/data/definitions/79.html"
    },
    {
        title: "SQL Injection",
        name: "Improper Neutralization of Special Elements used in an SQL Command",
        link: "https://cwe.mitre.org/data/definitions/89.html"
    },
    {
        title: "Cross-Site Request Forgery",
        name: "Cross-Site Request Forgery",
        link: "https://cwe.mitre.org/data/definitions/352.html"
    },
    {
        title: "Missing Authorization",
        name: "Missing Authorization",
        link: "https://cwe.mitre.org/data/definitions/862.html"
    }
]