const { execSync } = require('child_process');
const fs = require('fs');
try {
    const result = execSync('npx prisma validate', { encoding: 'utf8', stdio: 'pipe' });
    console.log(result);
} catch (e) {
    fs.writeFileSync('prisma_debug.txt', (e.stdout || '') + '\n---\n' + (e.stderr || ''));
}
