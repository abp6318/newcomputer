// TODO: Add Windows and Linux
// TODO: Add pip and nvm
// TODO: Add `<span class="line-numbers-rows"><span>::before</span></span>` when user hits enter in the pre block to get line numbers


const dictionary = {
    "macos": {
        "curl": [
            {
                "tool": "Node.js",
                "documentation": "https://nodejs.org/en",
                "versions": [
                    {
                        "version_number": "latest (20.11.0)",
                        "cli": "curl \"https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\\1|p')}.pkg\" > \"$HOME/Downloads/node-latest.pkg\" && sudo installer -store -pkg \"$HOME/Downloads/node-latest.pkg\" -target \"/\""
                    },
                ]
            },
            {
                "tool": "Python",
                "documentation": "https://www.python.org/downloads/mac-osx/",
                "versions": [
                    {
                        "version_number": "3.8.0",
                        "cli": "curl -O https://www.python.org/ftp/python/3.8.0/python-3.8.0-macosx10.9.pkg"
                    },
                    {
                        "version_number": "2.7.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.7.0/python-2.7.0-macosx10.9.pkg"
                    },
                    {
                        "version_number": "2.6.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.6.0/python-2.6.0-macosx10.6.dmg"
                    },
                    {
                        "version_number": "2.5.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.5.0/python-2.5.0-macosx.dmg",
                    },
                    {
                        "version_number": "2.4.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.4.0/python-2.4.0-macosx.dmg"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 1",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 2",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 3",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 4",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 5",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 6",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 7",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 8",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            },
            {
                "tool": "DEMO TOOL 9",
                "documentation": "demo link here",
                "versions": [
                    {
                        "version_number": "latest (demo)",
                        "cli": "demo cli | demo cli | more demo cli"
                    }
                ]
            }
        ],
        "brew": [
            {
                "tool": "Node.js",
                "documentation": "https://nodejs.org/en",
                "versions": [
                    {
                        "version_number": "latest (20.11.0)",
                        "cli": "brew install node"
                    }
                ]
            },
            {
                "tool": "Python",
                "documentation": "https://www.python.org/downloads/mac-osx/",
                "versions": [
                    {
                        "version_number": "3.8.0",
                        "cli": "brew install python"
                    },
                    {
                        "version_number": "2.7.0",
                        "cli": "brew install python@2"
                    }
                ]
            }
        ],
        "yarn": [
            {
                "tool": "React.js",
                "documentation": "https://reactjs.org",
                "versions": [
                    {
                        "version_number": "latest (18.2.0)",
                        "cli": "yarn add react"
                    }
                ]
            },
            {
                "tool": "Webpack",
                "documentation": "https://webpack.js.org",
                "versions": [
                    {
                        "version_number": "latest (5.90.1)",
                        "cli": "yarn add webpack"
                    }
                ]
            }
        ],
        "npm": [
            {
                "tool": "React.js",
                "documentation": "https://reactjs.org",
                "versions": [
                    {
                        "version_number": "latest (18.2.0)",
                        "cli": "npm install react"
                    }
                ]
            },
            {
                "tool": "Webpack",
                "documentation": "https://webpack.js.org",
                "versions": [
                    {
                        "version_number": "latest (5.90.1)",
                        "cli": "npm install webpack"
                    }
                ]
            }
        ]
    },

    "windows": {
        "curl": [
            {
                "tool": "Node.js",
                "documentation": "https://nodejs.org/en",
                "versions": [
                    {
                        "version_number": "latest (20.11.0)",
                        "cli": "curl \"https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\\1|p')}.pkg\" > \"$HOME/Downloads/node-latest.pkg\" && sudo installer -store -pkg \"$HOME/Downloads/node-latest.pkg\" -target \"/\""
                    },
                ]
            },
            {
                "tool": "Python",
                "documentation": "https://www.python.org/downloads/mac-osx/",
                "versions": [
                    {
                        "version_number": "3.8.0",
                        "cli": "curl -O https://www.python.org/ftp/python/3.8.0/python-3.8.0-macosx10.9.pkg"
                    },
                    {
                        "version_number": "2.7.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.7.0/python-2.7.0-macosx10.9.pkg"
                    },
                    {
                        "version_number": "2.6.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.6.0/python-2.6.0-macosx10.6.dmg"
                    },
                    {
                        "version_number": "2.5.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.5.0/python-2.5.0-macosx.dmg",
                    },
                    {
                        "version_number": "2.4.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.4.0/python-2.4.0-macosx.dmg"
                    }
                ]
            }
        ],
        "brew": [
            {
                "tool": "Node.js",
                "documentation": "https://nodejs.org/en",
                "versions": [
                    {
                        "version_number": "latest (20.11.0)",
                        "cli": "brew install node"
                    }
                ]
            },
            {
                "tool": "Python",
                "documentation": "https://www.python.org/downloads/mac-osx/",
                "versions": [
                    {
                        "version_number": "3.8.0",
                        "cli": "brew install python"
                    },
                    {
                        "version_number": "2.7.0",
                        "cli": "brew install python@2"
                    }
                ]
            }
        ],
        "yarn": [
            {
                "tool": "React.js",
                "documentation": "https://reactjs.org",
                "versions": [
                    {
                        "version_number": "latest (18.2.0)",
                        "cli": "yarn add react"
                    }
                ]
            },
            {
                "tool": "Webpack",
                "documentation": "https://webpack.js.org",
                "versions": [
                    {
                        "version_number": "latest (5.90.1)",
                        "cli": "yarn add webpack"
                    }
                ]
            }
        ],
        "npm": [
            {
                "tool": "React.js",
                "documentation": "https://reactjs.org",
                "versions": [
                    {
                        "version_number": "latest (18.2.0)",
                        "cli": "npm install react"
                    }
                ]
            },
            {
                "tool": "Webpack",
                "documentation": "https://webpack.js.org",
                "versions": [
                    {
                        "version_number": "latest (5.90.1)",
                        "cli": "npm install webpack"
                    }
                ]
            }
        ]
    },

    "linux": {
        "curl": [
            {
                "tool": "Node.js",
                "documentation": "https://nodejs.org/en",
                "versions": [
                    {
                        "version_number": "latest (20.11.0)",
                        "cli": "curl \"https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\\1|p')}.pkg\" > \"$HOME/Downloads/node-latest.pkg\" && sudo installer -store -pkg \"$HOME/Downloads/node-latest.pkg\" -target \"/\""
                    },
                ]
            },
            {
                "tool": "Python",
                "documentation": "https://www.python.org/downloads/mac-osx/",
                "versions": [
                    {
                        "version_number": "3.8.0",
                        "cli": "curl -O https://www.python.org/ftp/python/3.8.0/python-3.8.0-macosx10.9.pkg"
                    },
                    {
                        "version_number": "2.7.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.7.0/python-2.7.0-macosx10.9.pkg"
                    },
                    {
                        "version_number": "2.6.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.6.0/python-2.6.0-macosx10.6.dmg"
                    },
                    {
                        "version_number": "2.5.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.5.0/python-2.5.0-macosx.dmg",
                    },
                    {
                        "version_number": "2.4.0",
                        "cli": "curl -O https://www.python.org/ftp/python/2.4.0/python-2.4.0-macosx.dmg"
                    }
                ]
            }
        ],
        "brew": [
            {
                "tool": "Node.js",
                "documentation": "https://nodejs.org/en",
                "versions": [
                    {
                        "version_number": "latest (20.11.0)",
                        "cli": "brew install node"
                    }
                ]
            },
            {
                "tool": "Python",
                "documentation": "https://www.python.org/downloads/mac-osx/",
                "versions": [
                    {
                        "version_number": "3.8.0",
                        "cli": "brew install python"
                    },
                    {
                        "version_number": "2.7.0",
                        "cli": "brew install python@2"
                    }
                ]
            }
        ],
        "yarn": [
            {
                "tool": "React.js",
                "documentation": "https://reactjs.org",
                "versions": [
                    {
                        "version_number": "latest (18.2.0)",
                        "cli": "yarn add react"
                    }
                ]
            },
            {
                "tool": "Webpack",
                "documentation": "https://webpack.js.org",
                "versions": [
                    {
                        "version_number": "latest (5.90.1)",
                        "cli": "yarn add webpack"
                    }
                ]
            }
        ],
        "npm": [
            {
                "tool": "React.js",
                "documentation": "https://reactjs.org",
                "versions": [
                    {
                        "version_number": "latest (18.2.0)",
                        "cli": "npm install react"
                    }
                ]
            },
            {
                "tool": "Webpack",
                "documentation": "https://webpack.js.org",
                "versions": [
                    {
                        "version_number": "latest (5.90.1)",
                        "cli": "npm install webpack"
                    }
                ]
            }
        ]
    },
}

document.querySelector("#copy-tooltip").addEventListener('click', async function(event) {
    const selectedRows = Array.from(document.querySelectorAll(".install-table-row")).filter((row) => row.selected);
    const allInnerText = selectedRows.map((row) => Array.from(row.children)[3].innerText);
    if (allInnerText.length === 0) {
        alert("Please select a row to copy to clipboard");
        return;
    } else {
        const innerTextToCLIForClipboard = allInnerText.join(" && ");
        await navigator.clipboard.writeText(innerTextToCLIForClipboard);
        alert(`Copied ${allInnerText.length} command(s) to clipboard`);
    }
});

document.querySelector("#script-tooltip").addEventListener('click', function(event) {
    const codeblock = document.querySelector("#my-pre-block");

    const selectedRows = Array.from(document.querySelectorAll(".install-table-row")).filter((row) => row.selected);
    const allInnerText = selectedRows.map((row) => Array.from(row.children)[3].innerText);
    if (allInnerText.length === 0) {
        alert("Please select a row to copy to clipboard");
        return;
    } else {
        allInnerText.forEach((innerText) => {
            const temp = document.createElement("code")
            temp.classList.add("language-css");
            temp.appendChild(document.createTextNode(innerText));

            // `<span class="line-numbers-rows"><span>::before</span></span>` TODO: add this within code element to produce line numbers
            // const lineNumber = document.createElement("span");
            // lineNumber.classList.add("line-number");
            // temp.appendChild(lineNumber);

            codeblock.appendChild(temp);
        });
    }
});

document.querySelector("#download-tooltip").addEventListener('click', function(event) {
    const codeblock = document.querySelector("#my-pre-block");
    const code = codeblock.innerText;

    const blob = new Blob([code], { type: 'bash' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quick-setup.sh';
    a.click();

    URL.revokeObjectURL(url);
});

// Triggered when either operating system is changed or method of installation is changed
document.addEventListener('calciteChipGroupSelect', function(event) {
    const os = document.getElementById("os");
    const method = document.getElementById("method");

    const selectedOS = selectedChipInChipGroup(os);
    const selectedMethod = selectedChipInChipGroup(method);
    
    const tableData = getTableValues(selectedOS, selectedMethod);

    // clear the table
    const rows = document.querySelectorAll(".install-table-row");
    rows.forEach((row) => row.remove());
    
    // render the new table
    renderTable(tableData);
});

/**
 * Gets the values from the dictionary based on the selected OS and method of installation
 * @param {string} os 
 * @param {string} method 
 * @returns values from dictionary of selected OS and method
 */
function getTableValues(os = "macos", method = "curl") {
    let tableData = dictionary[os][method];
    return tableData;
}

/**
 * Gets the value of the selected chip in a chip group (_must_ be single select)
 * @param {HTMLCollection} chipGroup 
 * @returns value of selected chip
 */
function selectedChipInChipGroup (chipGroup) {
    return Array.from(chipGroup.children[0].children).filter((child) => child.selected)[0].value.toLowerCase();
}

function renderTable(tableData) {
    // what to render? 
    // <calcite-table-row>
    //     <calcite-table-cell>TOOL</calcite-table-cell>
    //     <calcite-table-cell>DOCUMENTATION</calcite-table-cell>
    //     <calcite-table-cell>VERSION SELECT</calcite-table-cell>
    //     <calcite-table-cell>CLI</calcite-table-cell>
    // </calcite-table-row>

    tableData.forEach(({tool, documentation, versions}) => {
        renderTableRow(tool, documentation, versions);
    });
}

function renderTableRow (tool, documentation, versions) {
    const table = document.getElementById('install-table');
    const row = document.createElement('calcite-table-row');
    row.classList.add('install-table-row');

    const toolCell = document.createElement('calcite-table-cell');
    toolCell.innerHTML = tool;

    const documentationCell = document.createElement('calcite-table-cell');
    documentationCell.innerHTML = `<span style="white-space: nowrap">${documentation}</span>`;

    const versionCell = document.createElement('calcite-table-cell');
    const versionSelect = document.createElement('calcite-select');
    versions.forEach((version, index) => {
        const option = document.createElement('calcite-option');
        option.value = version.version_number;
        option.label = version.version_number;
        option.select = index === 0;
        versionSelect.appendChild(option);
    });
    versionCell.appendChild(versionSelect);

    const cliCell = renderCLICell(versions[0].cli);

    row.appendChild(toolCell);
    row.appendChild(documentationCell);
    row.appendChild(versionCell);
    row.appendChild(cliCell);
    table.appendChild(row);
}

function renderCLICell (cli) {
    const cliCell = document.createElement('calcite-table-cell');
    cliCell.innerHTML = `<code style="white-space: nowrap;background-color: #ffe3e8; border-radius: 5px; padding:2px 5px;">${cli}</code>`;
    return cliCell;
}

// update CLI when version is changed
document.addEventListener('calciteSelectChange', function(event) {
    const os = document.getElementById("os");
    const method = document.getElementById("method");
    const selectedOS = selectedChipInChipGroup(os);
    const selectedMethod = selectedChipInChipGroup(method);
    const toolName = Array.from(event.target.parentElement.parentElement.children)[0].innerHTML;
    const selectedVersion = event.target.value;
    const toolCLIToUpdate = dictionary[selectedOS][selectedMethod].filter((e) => e.tool === toolName)[0];
    const newCLI = toolCLIToUpdate.versions.filter((e) => e.version_number === selectedVersion)[0].cli;
    Array.from(event.target.parentElement.parentElement.children)[3].innerHTML = `<code style="white-space: nowrap;background-color: #ffe3e8; border-radius: 5px; padding:2px 5px;">${newCLI}</code>`;
});

// main
renderTable(getTableValues());
