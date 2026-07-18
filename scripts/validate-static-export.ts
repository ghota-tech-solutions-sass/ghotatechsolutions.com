/// <reference types="bun" />

export {};

type RouteCheck = {
  route: string;
  required: string[];
  forbidden?: string[];
};

const checks: RouteCheck[] = [
  {
    route: "rift-dice",
    required: ["Rift Dice", "Maîtrisez les anneaux à votre rythme", "Sans achat intégré au lancement"],
  },
  {
    route: "rift-dice/support",
    required: ["Support Rift Dice", "Version 0.4 earned-only"],
    forbidden: ["Restaurer les achats"],
  },
  {
    route: "rift-dice/privacy",
    required: ["Confidentialité de Rift Dice", "conservés au maximum 90 jours"],
    forbidden: ["Google AdMob"],
  },
  {
    route: "rift-dice/delete-account",
    required: ["Supprimer un compte Rift Dice", "Demande web", "sept jours"],
    forbidden: ["achats consommables"],
  },
];

const failures: string[] = [];

for (const check of checks) {
  const path = `out/${check.route}/index.html`;
  const file = Bun.file(path);
  if (!(await file.exists())) {
    failures.push(`${path}: missing directory index; GitHub Pages would return 404`);
    continue;
  }
  const html = await file.text();
  for (const marker of check.required) {
    if (!html.includes(marker)) failures.push(`${path}: missing ${JSON.stringify(marker)}`);
  }
  for (const marker of check.forbidden ?? []) {
    if (html.includes(marker)) failures.push(`${path}: forbidden stale copy ${JSON.stringify(marker)}`);
  }
}

const cname = (await Bun.file("out/CNAME").text()).trim();
if (cname !== "ghotatechsolutions.com") {
  failures.push(`out/CNAME: expected ghotatechsolutions.com, received ${JSON.stringify(cname)}`);
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`STATIC EXPORT BLOCKER: ${failure}`);
  process.exit(1);
}

console.log("Static export validated: four Rift Dice Store routes and custom domain are publishable.");
