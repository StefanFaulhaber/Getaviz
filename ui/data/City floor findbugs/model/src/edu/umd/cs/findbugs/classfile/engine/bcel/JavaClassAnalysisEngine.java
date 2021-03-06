/*
 * FindBugs - Find Bugs in Java programs
 * Copyright (C) 2006, University of Maryland
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

package edu.umd.cs.findbugs.classfile.engine.bcel;

import java.io.IOException;

import org.apache.bcel.Repository;
import org.apache.bcel.classfile.ClassParser;
import org.apache.bcel.classfile.JavaClass;

import edu.umd.cs.findbugs.AnalysisCacheToRepositoryAdapter;
import edu.umd.cs.findbugs.SystemProperties;
import edu.umd.cs.findbugs.classfile.CheckedAnalysisException;
import edu.umd.cs.findbugs.classfile.ClassDescriptor;
import edu.umd.cs.findbugs.classfile.IAnalysisCache;
import edu.umd.cs.findbugs.classfile.IClassAnalysisEngine;
import edu.umd.cs.findbugs.classfile.ResourceNotFoundException;
import edu.umd.cs.findbugs.classfile.analysis.ClassData;

/**
 * Analysis engine to produce a BCEL JavaClass object for a named class.
 *
 * @author David Hovemeyer
 */
public class JavaClassAnalysisEngine implements IClassAnalysisEngine<JavaClass> {
    private static final boolean DEBUG_MISSING_CLASSES = SystemProperties.getBoolean("findbugs.debug.missingclasses");

    private static final String JVM_VERSION = SystemProperties.getProperty("java.runtime.version");

    /*
     * (non-Javadoc)
     *
     * @see
     * edu.umd.cs.findbugs.classfile.IAnalysisEngine#analyze(edu.umd.cs.findbugs
     * .classfile.IAnalysisCache, java.lang.Object)
     */
    public JavaClass analyze(IAnalysisCache analysisCache, ClassDescriptor descriptor) throws CheckedAnalysisException {
        try {
            ClassData classData = analysisCache.getClassAnalysis(ClassData.class, descriptor);
            JavaClass javaClass = new ClassParser(classData.getInputStream(), descriptor.toResourceName()).parse();

            // Make sure that the JavaClass object knows the repository
            // it was loaded from.
            javaClass.setRepository(Repository.getRepository());

            if (DEBUG_MISSING_CLASSES && !(javaClass.getRepository() instanceof AnalysisCacheToRepositoryAdapter)) {
                throw new IllegalStateException("this should not happen");
            }

            return javaClass;
        } catch (RuntimeException e) {
            throw new RuntimeException("Unable to parse classfile for " + descriptor, e);
        } catch (IOException e) {
            throw new ResourceNotFoundException(descriptor.toResourceName(), e);
        }
    }

    /*
     * (non-Javadoc)
     *
     * @see
     * edu.umd.cs.findbugs.classfile.IAnalysisEngine#registerWith(edu.umd.cs
     * .findbugs.classfile.IAnalysisCache)
     */
    public void registerWith(IAnalysisCache analysisCache) {
        analysisCache.registerClassAnalysisEngine(JavaClass.class, this);
    }

    /*
     * (non-Javadoc)
     *
     * @see edu.umd.cs.findbugs.classfile.IAnalysisEngine#canRecompute()
     */
    public boolean canRecompute() {
        // Currently, JavaClass objects are compared by reference equality in
        // some places,
        // so we can't recompute them. (Plus, most detectors/analyses need
        // the JavaClass object, so keeping them in memory helps performance.)
        return false;
    }
}
